module Jekyll
  class RenderExplainerBlock < Liquid::Block

    def initialize(tag_name, text, tokens)
       super
       a, @title, c = text.match(/(title=\")([\w|\s]*)(")/i).captures
       a, @align, c = text.match(/(align=\")([\w|\s]*)(")/i).captures
     end

    def render(context)
      body = super
      "<aside class=\"sc__explainer spotlight-component sc--float-small sc--float-#{@align}\">
        <button class=\"sc__explainer-trigger\" aria-expanded=\"false\" aria-label=\"Toggle Explainer\">
          <i class=\"ellipse\">…</i>
        </button>
        <div class=\"sc__explainer-content\">
          <i class=\"icon-x\"></i>
          <div class=\"sc__explainer-title\">#{@title}</div>
          <div class=\"sc__explainer-body\">#{body}</div>
        </div>
      </aside>"
    end

  end
end

Liquid::Template.register_tag('_explainer', Jekyll::RenderExplainerBlock)
