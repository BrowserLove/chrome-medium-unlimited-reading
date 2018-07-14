var getMemberPreviewNotice = function() {
  return $('main + aside');
}

var isMemberPreview = function() {
  return !!getMemberPreviewNotice()
};

var replacePreviewWithMemberContent = function(newContent) {
  $('.postArticle-content').html(newContent);
}

var fetchMemberContent = () => fetch(document.location)
  .then(response => response.text())
  .then(html => $(html).find('.postArticle-content'))
  .then(replacePreviewWithMemberContent);

$(document).ready(function(){
  if(isMemberPreview()) {
    fetchMemberContent();
  }
})
