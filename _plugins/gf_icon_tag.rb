
module Jekyll
  # Returns the path to the specified asset.
  class TraitIconTag < Liquid::Tag
    @markup = nil

    def initialize(tag_name, markup, tokens)
      # strip leading and trailing spaces
      super
      @markup = markup.strip
      @icons = {'GF' => 'Gluten Free', 'V' => 'Vegetarian', 'P' => 'Paleo',
                'VN' => 'Vegan', 'SF' => 'Sodium Free', 'PS' => 'Pescatarian',
                'DF' => 'Dairy Free'}
    end


    def render(context)
      if @markup.empty?
        return 'Error processing input, expected syntax: ' \
               '{% asset_path filename post_id %}'
      end

      baseurl = context.registers[:site].baseurl || ''

      traits = list = context.registers[:page]['traits'] || []

      traits = list.split(', ') if traits.is_a?(String)

      traits = traits
                 .filter { |i| @icons[i] }
                 .map do |i|
        <<~TRAIT
          <img data-trait='#{i}'
               src='#{baseurl}/assets/images/traits/trait_#{i.downcase}.jpg'
               alt='#{@icons[i]}'
               title='#{@icons[i]}'/>
        TRAIT
      end

      return "" if traits.empty?

      "<div class='traits' data-list='#{list}'>#{traits.join}</div>" 
    end

  end
end

Liquid::Template.register_tag('traits_icons', Jekyll::TraitIconTag)
