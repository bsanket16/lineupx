import React from 'react'

import '../styles.css'
import Menu from './Menu'
import '../override.css'

export default function Home() {

    return (
        <>
            <Menu />
            <div className="home display-4 shadow-lg bg-light">
                <p className="text">
                    LineupX
                </p>
            </div>
        </>
    )
}
