 #!/usr/bin/env ruby

require "json"
require "liquid"


class Hash
  def remap(hash={})
    each { |k,v| yield hash, k, v }
    hash
  end
end


class Layout

  OFFSET = {
    "Data Management" => 0,
    "Techniques & Tools" => 95,
    "Platforms & Infrastructure" => 180, 
    "Languages & Frameworks" => 270,
  }

  def self.angles(start, step)
    Proc.new do
      Range.new(start, 90-start).step(step).to_a.shuffle +
      Range.new(start + (step * 0.5).to_i, 90-start).step(step).to_a.shuffle
    end
  end

  ANGLES = {
    adopt: angles(10, 15),
    trial: angles(8, 12), 
    assess: angles(6, 10), 
    hold: angles(4, 8), 
  }

  def self.instance(quadrant, ring)
    @instances ||= {}
    @instances["#{quadrant}:#{ring.to_s}"] ||= Layout.new(quadrant, ring)
  end

  def initialize(quadrant, ring)
    @offset = OFFSET[quadrant]
    @angles = ANGLES[ring].call
  end

  def next_angle
    @offset + @angles.shift.to_i
  end
end


class Blip
  attr_reader :name, :quadrant, :comments, :score

  def initialize(name, quadrant, comments, score)
    @name, @quadrant, @comments, @score = name, quadrant, comments, score
    @moved = false
  end

  def moved!
    @moved = true
  end

  def ring
    return :adopt if score == 0
    return :trial if score == 1
    return :assess if score == 2
    return :hold
  end

  def radius
    return 0 if ring == :adopt
    return 1 if ring == :trial
    return 2 if ring == :assess
    return 3
  end

  def angle
    Layout.instance(quadrant, ring).next_angle
  end

  def movement
    @moved ? "t" : "c"
  end

  def as_json
      { name: name, pc: { r: radius, t: angle }, comments: comments, movement: movement }
  end
end


class Radar
  def initialize(path)
    @blips = Radar.parse(path)
  end

  def [](name)
    @blips[name]
  end

  def track_moves(previous)
    @blips.each do |name, blip|
      prev_ring = previous[name].ring rescue "nil"
      if prev_ring != blip.ring
        puts "#{name}: #{prev_ring.upcase} --> #{blip.ring.upcase}"
        blip.moved!
      end
    end
  end

  # render blips as json into js template
  def render
    snippets = @blips.values.group_by(&:quadrant).remap do |hash, key, value|
      short_key = key.scan(/\w+/).first.downcase
      hash[short_key] = JSON.pretty_generate(value.sort_by(&:score).reverse.map(&:as_json))
    end
    template = Liquid::Template.parse(open("radar_data.js.liquid").read)
    open("js/radar_data.js", "w") do |out|
      out.puts template.render(snippets)
    end
  end

  # parse tab-separated data
  def self.parse(path)
    blips = {}
    open(path).each do |line|
      cols = line.split("\t")
      name, quadrant, comments, score, skip = cols[0], cols[1], cols[2], cols[3], cols[6]
      raise "PLEASE DELETE HEADER LINE: #{path}" if score == "AVG"
      next if skip == "TRUE"
      next if score.nil? || score.strip.empty?
      blip = Blip.new(name, quadrant, comments, score.to_f)
      blips[blip.name] = blip
    end
    blips
  end
end

files = Dir["data/TemplateData.tsv"]
radar = Radar.new(files.pop)
previous = files.pop
radar.track_moves(Radar.new(previous)) if previous
radar.render

