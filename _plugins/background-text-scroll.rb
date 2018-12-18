module Jekyll
  class RenderBackgroundTextScrollBlock < Liquid::Block

    def initialize(tag_name, text, tokens)
       super
       @image = text.match(/(image=\")(.*)(\")/i).captures[1]
     end

    def render(context)
      body = super
      "<div class=\"spotlight-component sc-background-text-scroll sc--full\"
       style=\"background-image:url('#{@image}');\">
      <div class=\"section-content\">#{body}</div>
      </div>"

    end

  end
end

Liquid::Template.register_tag('_background_text_scroll', Jekyll::RenderBackgroundTextScrollBlock)
