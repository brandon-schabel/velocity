import React, { useEffect } from 'react'
import * as am4core from '@amcharts/amcharts4/core'
import * as am4charts from '@amcharts/amcharts4/charts'
import * as am4plugins_forceDirected from '@amcharts/amcharts4/plugins/forceDirected'

let chart
// let themeValue

export const CircleViz = ({ nodes }) => {
  useEffect(() => {
    chart = am4core.create('circlechartdiv', am4charts.XYChart)
    chart.paddingRight = 20
    createChart()

    return () => {
      if (chart) {
        chart.dispose()
      }
      // unsubscribeTheme()
    }
  }, [])

  useEffect(() => {
    createChart()
  }, [nodes])

  // const unsubscribeTheme = theme.subscribe(theme => {
  //   themeValue = theme
  //
  //   if (themeValue && themeValue.mode === 'dark') {
  //     if (chart) chart.dispose()
  //     am4core.unuseAllThemes()
  //     am4core.useTheme(am4themes_dark)
  //     createChart()
  //   } else {
  //     if (chart) chart.dispose()
  //     am4core.unuseAllThemes()
  //     am4core.useTheme(am4themes_animated)
  //     createChart()
  //   }
  // })

  const createChart = () => {
    if (chart) {
      let chart = am4core.create(
        'circlechartdiv',
        am4plugins_forceDirected.ForceDirectedTree
      )

      let networkSeries = chart.series.push(
        new am4plugins_forceDirected.ForceDirectedSeries()
      )

      console.log(nodes)

      chart.data = nodes

      networkSeries.dataFields.value = 'value'
      networkSeries.dataFields.name = 'name'
      networkSeries.dataFields.children = 'children'
      networkSeries.nodes.template.tooltipText = '{name}:{value}'
      networkSeries.nodes.template.fillOpacity = 1
      networkSeries.manyBodyStrength = -20
      networkSeries.links.template.strength = 0.8
      networkSeries.minRadius = am4core.percent(2)

      networkSeries.nodes.template.label.text = '{name}'
      networkSeries.fontSize = 10
    }
  }

  return <div id="circlechartdiv" />
}
