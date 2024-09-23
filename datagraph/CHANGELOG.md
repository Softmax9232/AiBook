## 2.0.1

#### New Features

- Added support for custom charts. Now oyu can load locally your custom charts without needing to download, comple and host RAWGraphs. See this blog post for more information: https://www.rawgraphs.io/post/introducing-a-new-feature-in-rgraphs-on-the-fly-custom-chart
- Added Chord diagram: Added chart by merging pull request by @blindguardian50, @steve1711, @TheAlmightySpaceWarrior, @wizardry8, and @kandrews99.

#### Changes

- update rawgraphs-charts to 1.0.1
- Updated rawgraphs-core dependencies
- moved to sass instead of node-sass

#### new features in charts

- Voronoi Treemap: Exposed minimum weight ratio option, allowing better control of area fitting.
- Barchart: Padding in horizontal bar charts now works.
- Beeswarm plot: Added error message when using negative values for size.
- Bump chart: labels are now correct when using padding
- Circle packing: Added error message when using negative values for size.
- Circular dendrogram: Added error message when using negative values for size.
- Grouped barcharts: Fixed date formats. Axis ticks are now prettier when using dates.
- Linear dendrogram: Added error message when using negative values for size.
- Matrix plot: Improved labeling of visual options.
- Sankey diagram: Improved labeling of visual options.
- Stacked barcharts: Fixed date formats. Axis ticks are now prettier when using dates.
- Voronoi treemap: Fixed label styles.
- Fixed some typos (thanks to @SaarthakMaini and @TomFevrier!).

## 2.0.0-beta.13

#### Changes

- update d3 to 7.2.0
- update rawgraphs-charts to 1.0.0-beta.27

#### New Features

- added Voronoi Treemap
- added Calendar Heatmap
- copy dataset to clipboard
- editable sparql query and api url in data loader

## 2.0.0-beta.12

#### Changes

- update Sparql editor
- set sparql base iri to wikidata
- add wikidata prefixes autoamtically in sparql queries
- setup Google Analytics to track usage of charts
- fix min node version to Node14

## 2.0.0-beta.11

#### New Features

- added Slope chart
- added Pie chart

#### Changes

- update rawgraphs-charts to 1.0.0-beta.26

## 2.0.0-beta.10

#### New Features

- added Voronoi diagram
- added Horizon graph
- added Parallel coordinates
- New datasamples according to upcoming learning section
- Added sources to data samples
- Added links to tutorials
- Added links to source code

#### Changes

- update rawgraphs-charts to 1.0.0-beta.21
- updated rawgrahps-core to 1.0.0-beta.15
- Various bugfixing

## 2.0.0-beta.9

- updated rawgrahps-core to 1.0.0-beta.14 (number parsing with separators)
- update rawgraphs-charts, added gantt chart

## 2.0.0-beta.8

##### 25 Feb 2021

- updated rawgrahps-core to 1.0.0-beta.12 (dates parsing finally ok)

## 2.0.0-beta.7

##### 25 Feb 2021

- updated rawgrahps-core to 1.0.0-beta.11 (fixes parsing)

## 2.0.0-beta.6

##### 25 Feb 2021

## 2.0.0-beta.6

##### 23 Feb 2021

- refine UI for public release
- update gh action
- added samples datasets
- publishing to github pages
- support for iso dates
- fixed d3 version compatibility with rawgrahps-charts
- updated rawgrahps-core to 1.0.0-beta.10
- updated rawgrahps-charts to 1.0.0-beta.15

## 2.0.0-beta.5

##### 09 Feb 2021

- update gh action
- change data workflow
- color scales: partial support for multiple dimensions in mapping.
- color scales: support for default color
- color scales: invert, reset, lock
- updated rawgraphs-core (beta 5) and rawgraphs-charts (beta 9)

## 2.0.0-beta.4

#### 15 Dec 2020

Features:

- Added bar chart

## 2.0.0-beta.3

#### 01 Dec 2020

Features:

- Handling dates in color scales
- Added treemap chart
- Support for repeated options
- Updated dependencies: d3, rawgraphs-charts and rawgraphs-core
- New data samples

Bugfixes:

- Fixed restoring color scales when loading project

## 2.0.0beta2

#### 26 Nov 2020

Bugfixes:

- Fixing github actions

## 2.0.0beta1

#### 26 Nov 2020

Features:

- First version of export/import project
