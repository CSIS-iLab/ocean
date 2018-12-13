module Jekyll
  class RenderExplainerBlock < Liquid::Block

    def initialize(tag_name, text, tokens)
       super
       a, @title, c = text.match(/(title=\")([\w|\s]*)(")/i).captures
       a, @align, c = text.match(/(align=\")([\w|\s]*)(")/i).captures
     end

    def render(context)
      body = super
      "<div class=\"explainer spotlight-component sc--float-small sc--float-#{@align}\">
        <button class=\"explainer__trigger\" aria-expanded=\"false\" aria-label=\"Toggle Explainer\">
          <i class=\"ellipse\">…</i>
        </button>
        <span class=\"explainer__content\">
          <i class=\"icon-x\"></i>
          <span class=\"explainer__title\">#{@title}</span>
          <span class=\"explainer__body\">#{body}</span>
        </span>
      </div>"
    end

  end
end

Liquid::Template.register_tag('_explainer', Jekyll::RenderExplainerBlock)
