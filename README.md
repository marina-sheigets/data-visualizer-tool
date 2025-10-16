**IMPLEMENTATION OF DEV CHALLENGE of 2024**
-- I know that it is too late to implement it, but anyway :\) --

**Description**
Development of a web or desktop tool that will allow users with minimal technical skills to quickly and easily visualize various types of data. The product should provide the ability to upload data (tables, CSV, Excel, JSON files, and manual data entry into a field), select the type of visualization (graphs, charts, tables, etc.), and configure the main visualization parameters (colors, axes, titles) through an intuitive interface.
The tool should be as easy to use as possible, without the need for deep technical knowledge. The product should be adaptive to different screens and have integrations or the ability to export data to common formats (PDF, PNG, SVG) and print to a printer.
Files with test data are available at the link
.

**Basic functional requirements**

1. Interface:

-   Create a simple, intuitive user interface.
-   The visual style should be based on the MFA website: https://mfa.gov.ua/
-   Provide a clear structure where users can quickly find the options they need (uploading files, choosing a graph type, settings).
-   A detailed description of the interface elements is given below.

2. Data upload:

-   The tool should support uploading data in CSV, Excel, JSON formats, manual data entry into the input field.
-   Support for drag and drop of files.
-   Ability to preview the uploaded data in a tabular format before building a visualization.
-   Resistance to errors and unforeseen situations (incorrect data, empty files, etc.).

3. Selecting the type of visualization:

-   The tool should provide the ability to create at least 3 types of visualizations: line graph, bar chart, pie chart.
-   Add a simple mechanism for selecting the type of visualization (e.g. drop-down menu or buttons).
-   HTML, SVG, and CANVAS can be used to display graphs.
