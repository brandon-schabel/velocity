import React, { useState, useContext } from 'react'
import { Checkbox } from '../components'
import {
    VelocityThemeProvider,
    VelocityThemeContext,
} from '../utils/VelocityThemeContext'

export default {
    title: 'Button',
    component: Checkbox,
}
export const Component = () => {

    return <Checkbox ckBoxLabel="123" />

}