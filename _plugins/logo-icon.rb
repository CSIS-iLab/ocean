module Jekyll
  class RenderLogoTag < Liquid::Tag

    def initialize(tag_name, text, tokens)
      super
      @text = text
    end

    def render(context)
      '<img class="sos-logo post__icon" src="/assets/images/logos/logo_blue_icon.svg" aria-hidden="true" />'
    end
  end
end

Liquid::Template.register_tag('logo', Jekyll::RenderLogoTag)