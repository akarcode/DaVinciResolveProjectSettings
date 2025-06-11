# DaVinci Resolve Project Settings ↔ Scripting API Mapping

This website maps all DaVinci Resolve Project Settings to their corresponding scripting API parameters. This should help clarify which scripting parameters align with which settings, and highlight which properties are not available through the API.

The layout mirrors the Project Settings dialog as closely as possible for easy navigation. The goal was to expose all available parameters, which required creating duplicate sections to account for cases where different dropdown selections reveal different sets of parameters. This might feel overwhelming at first, but it avoids adding another layer of abstraction.

There's also an **"Additional"** section that includes project settings that are not part of the Project Settings dialog directly.

I also went through the process of creating all the dropdown lists. This was mostly for fun, but it's also helpful to showcase where the values match the dropdown names exactly and where specific values are used.

**Use this as a guide, not gospel.**

A hosted version is available here: [akar.id/resolve](https://akar.id/resolve/)

### Additional notes

- The Input fields and Checkboxes are non-functional. I found it would be too much for now.
- The Website relies heavily on JavaScript.

### Changelog

v1.0 (Initial release)
