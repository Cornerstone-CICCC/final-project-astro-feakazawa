## My reflections

### Which approach you chose for the product pages

I've decided to create directories for each product type besides index.astro (this file represents my homepage). So inside each directory we have two files. The index.astro represents the product path, for example, http://localhost:4321/bracelets. The second file is [slug].astro. This file will be resposive to create all child path using the 'slug' property. For example, if my product has slug 'charm-bracelet', the page http://localhost:4321/bracelets/charm-bracelet will be created.

So, the idea was to keep all specific products under the same parent. If in the future we have more bracelets, you will find them all over '.../bracelets' path. Besides that, for me it seems more organized doing this way and it's easier to generate all pages.

Talking about approach, I've decided to put my images in two distinct directory. Initially, I would like to keep them all over assets directory, because I read in Google if you keep your images inside of it, Astro will optimze the way he uses the images, so it's better to keep them on assets directory. But when I was trying to use the image path from json file, I couldn't get the images from assets folder. I was getting an error message and that's why I've decided to create an image directory inside public directory. When I did that, I could access all images from json file. So, "public->images" contains all images from json and "assets" all the remaining images used in this project.

## Benefits

For me, the greatest benefits during this product were layouts and components. The possibility of reusing elements was really helpful. Creating layouts and components helped me to avoid repeating code and make it easier to understand what you did. In a traditional html file, you need to declare all tags (<html>, <head>, <body>) in all your files, but using Astro I don't need to do this. I just need to create a layout template with all this information and reuse it in my other pages.

## Limitations or trade-offs

My limitations are related to create the interactive features. It was hard to create them because we only saw one example of how to create it and this example was made using React. We didn't learn React yet, so it was hard to understand how to create this kind of feature. I was looking for more information about this feature in the internet, but I couldn't understand very well. This topic isn't so clear to me at the moment.

One initial difficult was the concept of slug. After I understand what it means and how it works, it was easier to implement the pages.

Last but not least, my difficult was create a template for my grid images. I would like to have one template to be used in all my pages. In this template, it will upload all my images using the same key (for example, if key is "charm-bracelet", so it should upload all images with charm-bracelet1, charm-braceelt2 etc). But to do that, I'll need to use promises and we didn't learn about it. So I decided to create one GridLayout for each key. This will be a future improvement. Talking about future improvement, another one could be make this page responsive. At the moment, all pages were build for Desktop screen.

## Deploy link
https://inquisitive-entremet-abb6e8.netlify.app/
