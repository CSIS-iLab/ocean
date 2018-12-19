module Jekyll
  class RenderExplainerBlock < Liquid::Block

    def initialize(tag_name, text, tokens)
       super
       @title = text.match(/(title=\")([\w|\s]*)(")/i).captures[1]
       @align = text.match(/(align=\")([\w|\s]*)(")/i).captures[1]
     end

    def render(context)
      body = super
      "<aside class=\"sc-explainer spotlight-component sc--float-small sc--float-#{@align}\">
        <button class=\"sc-explainer__trigger\" aria-expanded=\"false\" aria-label=\"Toggle Explainer\">
          <i class=\"ellipse\">…</i>
        </button>
        <div class=\"sc-explainer__content\">
          <i class=\"icon-x\"></i>
          <div class=\"sc-explainer__title\">#{@title}</div>
          <div class=\"sc-explainer__body\">#{body}</div>
        </div>
      </aside>"
    end

  end
end

Liquid::Template.register_tag('_explainer', Jekyll::RenderExplainerBlock)
