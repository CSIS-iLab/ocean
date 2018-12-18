module Jekyll
  class RenderBackgroundTextScrollBlock < Liquid::Block

    def initialize(tag_name, text, tokens)
       super
       @image = text.match(/(image=\")(.*)(\")/i).captures[1]
    end

    def render(context)
      body = super
      "<div class=\"spotlight-component sc-background-text-scroll sc--full\">
      <div class=\"sc-background-text-scroll__background\"
       style=\"background-image:url('#{@image}');\">
       </div>
      <div class=\"sc-background-text-scroll__text\">#{body}</div>
      </div>"

    end

  end
end

Liquid::Template.register_tag('_background_text_scroll', Jekyll::RenderBackgroundTextScrollBlock)
