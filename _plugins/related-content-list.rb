Jekyll::Hooks.register :pages, :post_render do |post|
  # inject modification_time in post's datas.
  puts post.data
  if post.data['is_for_related_content_list']
    arr = ['<p>', '</p>']
    arr.each {|x| post.content.slice!(x) }
    content = post.content.strip
    puts content
    post.data['posts_list'] = content.split(",")
    puts post.data
  end
end