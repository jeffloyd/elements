import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Slider, { createSliderWithTooltip } from 'rc-slider'

import './slider.css'

const SliderWithTooltip = createSliderWithTooltip(Slider)
const SliderRangeWithTooltip = createSliderWithTooltip(Slider.Range)

const propTypes = {
  variant: PropTypes.string
}

class ESlider extends Component {
  render() {
    const { className, variant, ...restProps } = this.props,
          sliderClass = classNames(variant, className)
    return (
      <div className="e-slider">
        <SliderWithTooltip className={sliderClass} tipProps={{'overlayClassName': variant}} {...restProps}/>
      </div>
    )
  }
}

ESlider.propTypes = propTypes

class ESliderRange extends Component {
  render() {
    const { className, variant, ...restProps } = this.props,
          sliderClass = classNames(variant, className);
    return (
      <div className="e-slider">
        <SliderRangeWithTooltip className={sliderClass} tipProps={{'overlayClassName': variant}} {...restProps}/>
      </div>
    )
  }
}

ESliderRange.propTypes = propTypes

export default ESlider
export { ESliderRange }
