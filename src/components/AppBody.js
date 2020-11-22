import React from 'react'
import { TechCard } from './TechCard'
import { techStack } from '../data/techStack'

export const AppBody = () => {
    
    return (
        <div>
        {
            techStack.map(stack => {
                return <TechCard 
                            key={stack.techTitle}
                            {...stack}
                        />
            })
        }
        </div>
    )
}
