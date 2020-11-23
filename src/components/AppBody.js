import React, { useContext } from 'react'
import { TechCard } from './TechCard'
import { techStack } from '../data/techStack'
import { SearchContext } from '../context/SearchContext'

export const AppBody = () => {
    const {keywords} = useContext(SearchContext);

    const filteredStack = techStack.filter(stack => {
        return keywords === "" || stack.techTitle.toLowerCase().includes(keywords.toLowerCase());
    })

    return (
        <div>
        {
            filteredStack.map((stack, i) => {
                return <TechCard 
                            key={stack.techTitle}
                            index={i}
                            {...stack}
                        />
            })
        }
        </div>
    )
}
