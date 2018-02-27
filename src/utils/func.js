import timestampNow from 'performance-now'
import React from 'react';
import { PixelRatio } from 'react-native';
let pixelRatio = PixelRatio.get();

export const normalize = (size) => {
    switch (true){
        case (pixelRatio < 1.4):
            return size * 0.8;
        case (pixelRatio < 2.4):
            return size * 1.15;
        case (pixelRatio < 3.4):
            return size * 1.35;
        default:
            return size * 1.5;
    }
}

export const normalizeFont = (size) => {
    if (pixelRatio < 1.4){
        return Math.sqrt((height*height)+(width*width))*(size/175);
    }
    return Math.sqrt((height*height)+(width*width))*(size/100);
}
export function throttle() {
    return false
}