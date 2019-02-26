import React, { Component } from 'react'
import { Text } from 'react-native'

export default class CustomText extends Component {

    render() {
        const { text, color } = this.props
        return(
            <Text style={{color, fontSize: 26}}>{text}</Text>
        )
    }
}