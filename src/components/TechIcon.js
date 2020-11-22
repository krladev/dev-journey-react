import React from 'react'
import { FaHtml5, 
            FaCss3,
            FaJsSquare, 
            FaReact, 
            FaVuejs, 
            FaPhp, 
            FaDatabase, 
            FaAws, 
            FaGitSquare, 
            FaLinux, 
            FaNode, 
            FaPython, 
            FaFoursquare, 
            FaCreativeCommonsSa} from 'react-icons/fa'

export const TechIcon = ({icon}) => {

    const renderIcon = () => {
        switch (icon) {
            case "fab fa-html5":
                return <FaHtml5 />

            case "fab fa-css3":
                return <FaCss3 />

            case "fab fa-js-square":
                return <FaJsSquare />

            case "fab fa-react":
                return <FaReact />
            
            case "fab fa-vuejs":
                return <FaVuejs />

            case "fab fa-php":
                return <FaPhp />

            case "fas fa-database":
                return <FaDatabase />
            
            case "fab fa-aws":
                return <FaAws />

            case "fab fa-git-square":
                return <FaGitSquare />
            
            case "fab fa-linux":
                return <FaLinux />

            case "fab fa-node":
                return <FaNode />

            case "fab fa-python":
                return <FaPython />

            case "fab fa-foursquare":
                return <FaFoursquare />

            case "fab fa-creative-commons-sa":
                return <FaCreativeCommonsSa />
        
            default:
                return <div></div>;
        }           
    }

    return (
        renderIcon()
    )
}
