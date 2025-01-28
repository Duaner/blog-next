// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

type BlogPostDocumentDataBodySlice =
  | TextSlice
  | ImageSlice
  | ImportantTextAndImageSlice
  | TitleAndTextSlice
  | HeroSlice;

/**
 * Content for blog_post documents
 */
interface BlogPostDocumentData {
  /**
   * Slice Zone field in *blog_post*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: blog_post.body[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  body: prismic.SliceZone<BlogPostDocumentDataBodySlice> /**
   * Background Color field in *blog_post*
   *
   * - **Field Type**: Color
   * - **Placeholder**: *None*
   * - **API ID Path**: blog_post.background_color
   * - **Tab**: Metadata & SEO
   * - **Documentation**: https://prismic.io/docs/field#color
   */;
  background_color: prismic.ColorField;

  /**
   * Secondary Color field in *blog_post*
   *
   * - **Field Type**: Color
   * - **Placeholder**: *None*
   * - **API ID Path**: blog_post.secondary_color
   * - **Tab**: Metadata & SEO
   * - **Documentation**: https://prismic.io/docs/field#color
   */
  secondary_color: prismic.ColorField;

  /**
   * FontColor field in *blog_post*
   *
   * - **Field Type**: Color
   * - **Placeholder**: *None*
   * - **API ID Path**: blog_post.fontcolor
   * - **Tab**: Metadata & SEO
   * - **Documentation**: https://prismic.io/docs/field#color
   */
  fontcolor: prismic.ColorField;

  /**
   * Meta Title field in *blog_post*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: blog_post.meta_title
   * - **Tab**: Metadata & SEO
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *blog_post*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: blog_post.meta_description
   * - **Tab**: Metadata & SEO
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *blog_post*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: blog_post.meta_image
   * - **Tab**: Metadata & SEO
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * blog_post document from Prismic
 *
 * - **API ID**: `blog_post`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type BlogPostDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<BlogPostDocumentData>,
    "blog_post",
    Lang
  >;

type HomepageDocumentDataSlicesSlice = never;

/**
 * Content for Homepage documents
 */
interface HomepageDocumentData {
  /**
   * Slice Zone field in *Homepage*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<HomepageDocumentDataSlicesSlice> /**
   * Meta Description field in *Homepage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: homepage.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Homepage*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *Homepage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: homepage.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * Homepage document from Prismic
 *
 * - **API ID**: `homepage`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomepageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<HomepageDocumentData>,
    "homepage",
    Lang
  >;

export type AllDocumentTypes = BlogPostDocument | HomepageDocument;

/**
 * Primary content in *Books 3D → Default → Primary*
 */
export interface BookSliceDefaultPrimary {
  /**
   * Title field in *Books 3D → Default → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: Section Title
   * - **API ID Path**: book.default.primary.title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.TitleField;

  /**
   * Description field in *Books 3D → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: A description of the book collection
   * - **API ID Path**: book.default.primary.description
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;
}

/**
 * Primary content in *Books 3D → Items*
 */
export interface BookSliceDefaultItem {
  /**
   * Book Title field in *Books 3D → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Enter book title
   * - **API ID Path**: book.items[].bookTitle
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  bookTitle: prismic.KeyTextField;

  /**
   * Book Cover field in *Books 3D → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: book.items[].bookCover
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  bookCover: prismic.ImageField<never>;
}

/**
 * Default variation for Books 3D Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type BookSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<BookSliceDefaultPrimary>,
  Simplify<BookSliceDefaultItem>
>;

/**
 * Slice variation for *Books 3D*
 */
type BookSliceVariation = BookSliceDefault;

/**
 * Books 3D Shared Slice
 *
 * - **API ID**: `book`
 * - **Description**: A 3D book showcase component
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type BookSlice = prismic.SharedSlice<"book", BookSliceVariation>;

/**
 * Primary content in *Hero → Default → Primary*
 */
export interface HeroSliceDefaultPrimary {
  /**
   * CoverImage field in *Hero → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.coverimage
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  coverimage: prismic.ImageField<never>;

  /**
   * Title field in *Hero → Default → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: Running during Lockdown, ahzhaeaz
   * - **API ID Path**: hero.default.primary.title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.TitleField;

  /**
   * SubTitle field in *Hero → Default → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: I tried to create a running app to advocate the fact that runners should not go out for a run.
   * - **API ID Path**: hero.default.primary.subtitle
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  subtitle: prismic.TitleField;
}

/**
 * Default variation for Hero Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<HeroSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Hero*
 */
type HeroSliceVariation = HeroSliceDefault;

/**
 * Hero Shared Slice
 *
 * - **API ID**: `hero`
 * - **Description**: Hero
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSlice = prismic.SharedSlice<"hero", HeroSliceVariation>;

/**
 * Primary content in *Image → Default → Primary*
 */
export interface ImageSliceDefaultPrimary {
  /**
   * Image field in *Image → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: image.default.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * Caption field in *Image → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: image.default.primary.azeazeza
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  azeazeza: prismic.RichTextField;
}

/**
 * Default variation for Image Slice
 *
 * - **API ID**: `default`
 * - **Description**: Image
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ImageSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<ImageSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Image*
 */
type ImageSliceVariation = ImageSliceDefault;

/**
 * Image Shared Slice
 *
 * - **API ID**: `image`
 * - **Description**: Image
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ImageSlice = prismic.SharedSlice<"image", ImageSliceVariation>;

/**
 * Primary content in *Important text and image → Default → Primary*
 */
export interface ImportantTextAndImageSliceDefaultPrimary {
  /**
   * text_outlined field in *Important text and image → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: important_text_and_image.default.primary.text_outlined
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  text_outlined: prismic.RichTextField;

  /**
   * illustration field in *Important text and image → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: important_text_and_image.default.primary.illustration
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  illustration: prismic.ImageField<"Mobile">;
}

/**
 * Default variation for Important text and image Slice
 *
 * - **API ID**: `default`
 * - **Description**: ImportantTextAndImage
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ImportantTextAndImageSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<ImportantTextAndImageSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Important text and image*
 */
type ImportantTextAndImageSliceVariation = ImportantTextAndImageSliceDefault;

/**
 * Important text and image Shared Slice
 *
 * - **API ID**: `important_text_and_image`
 * - **Description**: ImportantTextAndImage
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ImportantTextAndImageSlice = prismic.SharedSlice<
  "important_text_and_image",
  ImportantTextAndImageSliceVariation
>;

/**
 * Primary content in *Text → Default → Primary*
 */
export interface TextSliceDefaultPrimary {
  /**
   * Text Block field in *Text → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: text.default.primary.text
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  text: prismic.RichTextField;
}

/**
 * Default variation for Text Slice
 *
 * - **API ID**: `default`
 * - **Description**: Text
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TextSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<TextSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Text*
 */
type TextSliceVariation = TextSliceDefault;

/**
 * Text Shared Slice
 *
 * - **API ID**: `text`
 * - **Description**: Text
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TextSlice = prismic.SharedSlice<"text", TextSliceVariation>;

/**
 * Primary content in *Title and text → Default → Primary*
 */
export interface TitleAndTextSliceDefaultPrimary {
  /**
   * Title Left field in *Title and text → Default → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: My title on the left
   * - **API ID Path**: title_and_text.default.primary.titleLeft
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  titleLeft: prismic.TitleField;

  /**
   * Paragraph field in *Title and text → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: A nice description of your feature
   * - **API ID Path**: title_and_text.default.primary.paragraph
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  paragraph: prismic.RichTextField;
}

/**
 * Default variation for Title and text Slice
 *
 * - **API ID**: `default`
 * - **Description**: TitleAndText
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TitleAndTextSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<TitleAndTextSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Title and text*
 */
type TitleAndTextSliceVariation = TitleAndTextSliceDefault;

/**
 * Title and text Shared Slice
 *
 * - **API ID**: `title_and_text`
 * - **Description**: TitleAndText
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TitleAndTextSlice = prismic.SharedSlice<
  "title_and_text",
  TitleAndTextSliceVariation
>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>;
  }

  interface CreateWriteClient {
    (
      repositoryNameOrEndpoint: string,
      options: prismic.WriteClientConfig,
    ): prismic.WriteClient<AllDocumentTypes>;
  }

  interface CreateMigration {
    (): prismic.Migration<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      BlogPostDocument,
      BlogPostDocumentData,
      BlogPostDocumentDataBodySlice,
      HomepageDocument,
      HomepageDocumentData,
      HomepageDocumentDataSlicesSlice,
      AllDocumentTypes,
      BookSlice,
      BookSliceDefaultPrimary,
      BookSliceDefaultItem,
      BookSliceVariation,
      BookSliceDefault,
      HeroSlice,
      HeroSliceDefaultPrimary,
      HeroSliceVariation,
      HeroSliceDefault,
      ImageSlice,
      ImageSliceDefaultPrimary,
      ImageSliceVariation,
      ImageSliceDefault,
      ImportantTextAndImageSlice,
      ImportantTextAndImageSliceDefaultPrimary,
      ImportantTextAndImageSliceVariation,
      ImportantTextAndImageSliceDefault,
      TextSlice,
      TextSliceDefaultPrimary,
      TextSliceVariation,
      TextSliceDefault,
      TitleAndTextSlice,
      TitleAndTextSliceDefaultPrimary,
      TitleAndTextSliceVariation,
      TitleAndTextSliceDefault,
    };
  }
}
