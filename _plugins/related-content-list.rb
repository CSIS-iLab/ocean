Jekyll::Hooks.register :pages, :post_render do |post|
  # inject modification_time in post's datas.
  puts post.data
  if post.data['is_for_related_content_list']
    post.data['posts_list'] = post.content.split(",")
    puts post.data
  end
end