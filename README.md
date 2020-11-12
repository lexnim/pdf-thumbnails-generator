
# ⭐️ [pdf-thumbnails-generator](https://www.npmjs.com/package/pdf-thumbnails-generator) &middot;  ![Test and Build](https://github.com/lexnim/pdf-thumbnails-generator/workflows/Test%20and%20Build/badge.svg?branch=master) ![NPM publish CD workflow](https://github.com/lexnim/pdf-thumbnails-generator/workflows/NPM%20publish%20CD%20workflow/badge.svg?branch=master)

- es6 module
- generates individual page thumbnails for provided pdf file
- base64 image
- returns a promise based function

# 📦 Getting Started

``` text
npm install pdf-thumbnails-generator
```

# 🚦 Arguments

| Option                    | Type    | Description                                                                |
|:-------------------------:|:-------:|:--------------------------------------------------------------------------:|
| `pdf_source`              | String  | PDF file source                                                            |
| `thumbnail_size`          | Integer | Desired width of pdf thumbnail eg:- 150                                    |

# 📦 Usage

``` text
import generatePdfThumbnails from 'pdf-thumbnails-generator';

async function generateThumbnails() {
    try {
        const thumbnails = await generatePdfThumbnails(pdf_source, thumbnail_size);
        console.log(thumbnails);
    } catch (err) {
        console.error(err);
    }
}
```

# 🚀 Example

[Click Here](https://lexnim.github.io/pdf-thumbnails-generator/)
