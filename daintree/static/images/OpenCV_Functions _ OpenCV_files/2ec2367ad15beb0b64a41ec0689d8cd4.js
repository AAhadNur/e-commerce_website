document.write('<link rel="stylesheet" href="https://github.githubassets.com/assets/gist-embed-3f9a3834048b.css">')
document.write('<div id=\"gist95293107\" class=\"gist\">\n    <div class=\"gist-file\" translate=\"no\">\n      <div class=\"gist-data\">\n        <div class=\"js-gist-file-update-container js-task-list-container file-box\">\n  <div id=\"file-image-filtering-py\" class=\"file my-2\">\n    \n    <div itemprop=\"text\" class=\"Box-body p-0 blob-wrapper data type-python  \">\n\n        \n<div class=\"js-check-bidi js-blob-code-container blob-code-content\">\n\n  <template class=\"js-file-alert-template\">\n  <div data-view-component=\"true\" class=\"flash flash-warn flash-full d-flex flex-items-center\">\n  <svg aria-hidden=\"true\" height=\"16\" viewBox=\"0 0 16 16\" version=\"1.1\" width=\"16\" data-view-component=\"true\" class=\"octicon octicon-alert\">\n    <path d=\"M6.457 1.047c.659-1.234 2.427-1.234 3.086 0l6.082 11.378A1.75 1.75 0 0 1 14.082 15H1.918a1.75 1.75 0 0 1-1.543-2.575Zm1.763.707a.25.25 0 0 0-.44 0L1.698 13.132a.25.25 0 0 0 .22.368h12.164a.25.25 0 0 0 .22-.368Zm.53 3.996v2.5a.75.75 0 0 1-1.5 0v-2.5a.75.75 0 0 1 1.5 0ZM9 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z\"><\/path>\n<\/svg>\n    <span>\n      This file contains bidirectional Unicode text that may be interpreted or compiled differently than what appears below. To review, open the file in an editor that reveals hidden Unicode characters.\n      <a href=\"https://github.co/hiddenchars\" target=\"_blank\">Learn more about bidirectional Unicode characters<\/a>\n    <\/span>\n\n\n  <div data-view-component=\"true\" class=\"flash-action\">        <a href=\"{{ revealButtonHref }}\" data-view-component=\"true\" class=\"btn-sm btn\">    Show hidden characters\n<\/a>\n<\/div>\n<\/div><\/template>\n<template class=\"js-line-alert-template\">\n  <span aria-label=\"This line has hidden Unicode characters\" data-view-component=\"true\" class=\"line-alert tooltipped tooltipped-e\">\n    <svg aria-hidden=\"true\" height=\"16\" viewBox=\"0 0 16 16\" version=\"1.1\" width=\"16\" data-view-component=\"true\" class=\"octicon octicon-alert\">\n    <path d=\"M6.457 1.047c.659-1.234 2.427-1.234 3.086 0l6.082 11.378A1.75 1.75 0 0 1 14.082 15H1.918a1.75 1.75 0 0 1-1.543-2.575Zm1.763.707a.25.25 0 0 0-.44 0L1.698 13.132a.25.25 0 0 0 .22.368h12.164a.25.25 0 0 0 .22-.368Zm.53 3.996v2.5a.75.75 0 0 1-1.5 0v-2.5a.75.75 0 0 1 1.5 0ZM9 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z\"><\/path>\n<\/svg>\n<\/span><\/template>\n\n  <table data-hpc class=\"highlight tab-size js-file-line-container js-code-nav-container js-tagsearch-file\" data-tab-size=\"8\" data-paste-markdown-skip data-tagsearch-lang=\"Python\" data-tagsearch-path=\"Image Filtering.py\">\n        <tr>\n          <td id=\"file-image-filtering-py-L1\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"1\"><\/td>\n          <td id=\"file-image-filtering-py-LC1\" class=\"blob-code blob-code-inner js-file-line\"><span class=pl-c>#importing the required libraries <\/span><\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-image-filtering-py-L2\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"2\"><\/td>\n          <td id=\"file-image-filtering-py-LC2\" class=\"blob-code blob-code-inner js-file-line\"><span class=pl-k>import<\/span> <span class=pl-s1>numpy<\/span> <span class=pl-k>as<\/span> <span class=pl-s1>np<\/span> <\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-image-filtering-py-L3\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"3\"><\/td>\n          <td id=\"file-image-filtering-py-LC3\" class=\"blob-code blob-code-inner js-file-line\"><span class=pl-k>import<\/span> <span class=pl-s1>cv2<\/span> <\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-image-filtering-py-L4\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"4\"><\/td>\n          <td id=\"file-image-filtering-py-LC4\" class=\"blob-code blob-code-inner js-file-line\"><span class=pl-k>import<\/span> <span class=pl-s1>matplotlib<\/span>.<span class=pl-s1>pyplot<\/span> <span class=pl-k>as<\/span> <span class=pl-s1>plt<\/span> <\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-image-filtering-py-L5\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"5\"><\/td>\n          <td id=\"file-image-filtering-py-LC5\" class=\"blob-code blob-code-inner js-file-line\"><span class=pl-c1>%<\/span><span class=pl-s1>matplotlib<\/span> <span class=pl-s1>inline<\/span> <\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-image-filtering-py-L6\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"6\"><\/td>\n          <td id=\"file-image-filtering-py-LC6\" class=\"blob-code blob-code-inner js-file-line\"><span class=pl-s1>image<\/span> <span class=pl-c1>=<\/span> <span class=pl-s1>cv2<\/span>.<span class=pl-en>imread<\/span>(<span class=pl-s>&#39;index.png&#39;<\/span>) <\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-image-filtering-py-L7\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"7\"><\/td>\n          <td id=\"file-image-filtering-py-LC7\" class=\"blob-code blob-code-inner js-file-line\"><span class=pl-c>#using the averaging kernel for image smoothening <\/span><\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-image-filtering-py-L8\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"8\"><\/td>\n          <td id=\"file-image-filtering-py-LC8\" class=\"blob-code blob-code-inner js-file-line\"><span class=pl-s1>averaging_kernel<\/span> <span class=pl-c1>=<\/span> <span class=pl-s1>np<\/span>.<span class=pl-en>ones<\/span>((<span class=pl-c1>3<\/span>,<span class=pl-c1>3<\/span>),<span class=pl-s1>np<\/span>.<span class=pl-s1>float32<\/span>)<span class=pl-c1>/<\/span><span class=pl-c1>9<\/span> <\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-image-filtering-py-L9\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"9\"><\/td>\n          <td id=\"file-image-filtering-py-LC9\" class=\"blob-code blob-code-inner js-file-line\"><span class=pl-s1>filtered_image<\/span> <span class=pl-c1>=<\/span> <span class=pl-s1>cv2<\/span>.<span class=pl-en>filter2D<\/span>(<span class=pl-s1>image<\/span>,<span class=pl-c1>-<\/span><span class=pl-c1>1<\/span>,<span class=pl-s1>kernel<\/span>) <\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-image-filtering-py-L10\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"10\"><\/td>\n          <td id=\"file-image-filtering-py-LC10\" class=\"blob-code blob-code-inner js-file-line\"><span class=pl-s1>plt<\/span>.<span class=pl-en>imshow<\/span>(<span class=pl-s1>dst<\/span>) <\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-image-filtering-py-L11\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"11\"><\/td>\n          <td id=\"file-image-filtering-py-LC11\" class=\"blob-code blob-code-inner js-file-line\"><span class=pl-c>#get a one dimensional Gaussian Kernel <\/span><\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-image-filtering-py-L12\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"12\"><\/td>\n          <td id=\"file-image-filtering-py-LC12\" class=\"blob-code blob-code-inner js-file-line\"><span class=pl-s1>gaussian_kernel_x<\/span> <span class=pl-c1>=<\/span> <span class=pl-s1>cv2<\/span>.<span class=pl-en>getGaussianKernel<\/span>(<span class=pl-c1>5<\/span>,<span class=pl-c1>1<\/span>) <\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-image-filtering-py-L13\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"13\"><\/td>\n          <td id=\"file-image-filtering-py-LC13\" class=\"blob-code blob-code-inner js-file-line\"><span class=pl-s1>gaussian_kernel_y<\/span> <span class=pl-c1>=<\/span> <span class=pl-s1>cv2<\/span>.<span class=pl-en>getGaussianKernel<\/span>(<span class=pl-c1>5<\/span>,<span class=pl-c1>1<\/span>) <\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-image-filtering-py-L14\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"14\"><\/td>\n          <td id=\"file-image-filtering-py-LC14\" class=\"blob-code blob-code-inner js-file-line\"><span class=pl-c>#converting to two dimensional kernel using matrix multiplication <\/span><\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-image-filtering-py-L15\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"15\"><\/td>\n          <td id=\"file-image-filtering-py-LC15\" class=\"blob-code blob-code-inner js-file-line\"><span class=pl-s1>gaussian_kernel<\/span> <span class=pl-c1>=<\/span> <span class=pl-s1>gaussian_kernel_x<\/span> <span class=pl-c1>*<\/span> <span class=pl-s1>gaussian_kernel_y<\/span>.<span class=pl-v>T<\/span> <\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-image-filtering-py-L16\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"16\"><\/td>\n          <td id=\"file-image-filtering-py-LC16\" class=\"blob-code blob-code-inner js-file-line\"><span class=pl-c>#you can also use cv2.GaussianBLurring(image,(shape of kernel),standard deviation) instead of cv2.filter2D <\/span><\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-image-filtering-py-L17\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"17\"><\/td>\n          <td id=\"file-image-filtering-py-LC17\" class=\"blob-code blob-code-inner js-file-line\"><span class=pl-s1>filtered_image<\/span> <span class=pl-c1>=<\/span> <span class=pl-s1>cv2<\/span>.<span class=pl-en>filter2D<\/span>(<span class=pl-s1>image<\/span>,<span class=pl-c1>-<\/span><span class=pl-c1>1<\/span>,<span class=pl-s1>gaussian_kernel<\/span>) <\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-image-filtering-py-L18\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"18\"><\/td>\n          <td id=\"file-image-filtering-py-LC18\" class=\"blob-code blob-code-inner js-file-line\"><span class=pl-s1>plt<\/span>.<span class=pl-en>imshow<\/span>()<\/td>\n        <\/tr>\n  <\/table>\n<\/div>\n\n\n    <\/div>\n\n  <\/div>\n<\/div>\n\n      <\/div>\n      <div class=\"gist-meta\">\n        <a href=\"https://gist.github.com/saurabhpal97/2ec2367ad15beb0b64a41ec0689d8cd4/raw/1a04694225bf4cce23b153dc53cb4fa1773b5e14/Image%20Filtering.py\" style=\"float:right\">view raw<\/a>\n        <a href=\"https://gist.github.com/saurabhpal97/2ec2367ad15beb0b64a41ec0689d8cd4#file-image-filtering-py\">\n          Image Filtering.py\n        <\/a>\n        hosted with &#10084; by <a href=\"https://github.com\">GitHub<\/a>\n      <\/div>\n    <\/div>\n<\/div>\n')
