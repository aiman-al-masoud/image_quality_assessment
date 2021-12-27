# WHAT WE HAVE TO DO

- Write the static part of the website, presenting and describing the results of the former experiments. Possibly, in an appealing way.

- Write the part that dynamically produces graphs/dashboards from user-generated data.

- Write a privacy policy for this website and check out relevant laws, or ask Prof. (Important because we're handling emails and, potentially, other personal data)

- Improve the UIX/look-and-feel of the website. Make it prettier and more intuitive.

- Do some more error-handling.

- Write credits, general info, and other documentation. 

- Put all our grey-level images in repository/images (referred to Daniele, Davide, Francesco M., ...)

- Put some presentations in repository/presentations folder

- Improve description on take_test.html

- Index the website with principal search engines (contact Amatofrancesco99)

- Think about three (or more) keywords to put in index .html

- Fix responsive problems on take_test.html (related to the images width)

🏅 **Get this thing ready, by the first week of January 2022** 🏅



***

## Python Team

Backend / Frontend (MOS plots)

1) First plot: MOS for each image (MOS vs image), one line for each impairment
2) Second plot: StdDev of MOS for each image, one line for each impairment
3) Heatmap of individual scores for each evaluator and for each impairment (maybe?)

### API endpoints

#### URL: /get-mos-data

Returned JSON:

```json
{
    "names": [
        "kitten",
        "doggo",
    ],
    "original-image-mos": [
        5,
        4,
        5
    ],
    "slightly-impaired-image-mos": [
        5,
        4,
        5
    ],
    "heavily-impaired-image-mos": [
        5,
        4,
        5
    ]
}
```

#### URL: /get-stddev-mos-data

Returned JSON:

```json
{
    "names": [
        "kitten",
        "doggo",
    ],
    "original-image-stddev-mos": [
        0.5,
        0.4,
        0.5
    ],
    "slightly-impaired-image-stddev-mos": [
        0.5,
        0.4,
        0.5
    ],
    "heavily-impaired-image-stddev-mos": [
        0.5,
        0.4,
        0.5
    ]
}
```
