# Rahul Kumar — TATA AIG General Insurance

A responsive, static five-page website for Rahul Kumar, a local TATA AIG General Insurance agent serving Patna, Muzaffarpur, Gaya and Chhapra in Bihar.

## Pages

- `index.html` — Home and insurance overview
- `products.html` — Health, property and vehicle insurance
- `benefits.html` — Benefits and local-agent guidance
- `about.html` — About Rahul and illustrative testimonial placeholders
- `contact.html` — Contact details and booking enquiry form

## Run locally

No build step or framework is required. From this directory, run:

```sh
python3 -m http.server 8080
```

Then open `http://localhost:8080` in a browser. For deployment, publish the repository root as a static site.

The contact form validates the requested fields and opens a prefilled email draft addressed to Rahul. It does not store or transmit form data on a server. Replace the clearly labelled illustrative testimonials with approved customer feedback before publication.

## Downloadable guide

`TATA-AIG-Rahul-Kumar-Insurance-Guide.pdf` is the five-page, print-ready guide in this order: Home, Insurance Products, Benefits, About, Contact. Its editable source layout is `print-guide.html`, styled with `assets/css/print-guide.css`. To regenerate it, open that file in a Chromium-based browser and choose **Print → Save as PDF**; the page size, landscape orientation and page breaks are defined in the stylesheet.

The site is built with semantic HTML, shared CSS, small vanilla JavaScript interactions, locally hosted DM Sans and Manrope fonts, and inline vector illustrations. Product availability, cover and claims are subject to the applicable policy terms, conditions, limits and exclusions.
