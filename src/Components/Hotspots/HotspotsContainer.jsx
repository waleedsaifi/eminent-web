import React from 'react'
import styled from 'styled-components'

const HotspotsContainer = () => {
    return (
        <div>
            <Container id='hotspots_container'></Container>
        </div>
    )
}

const Container = styled.div`
    left: 0;
    top: 0;
    position: absolute;
    pointer-events: none;
    width: 100%;
    height: 100%;
    overflow: hidden;
    color: var(--block2-text-secondary);
    
    .spot {
        position: absolute;
        left: 0;
        top: 0;
        transition: opacity 0s;
        text-transform: uppercase;
        pointer-events: auto;
        text-align: left;
        pointer-events: none;
        font-weight: 500;
        opacity: 0;
        
        &.enabled {
          transition: opacity 2s;
            pointer-events: auto;
            opacity: 1   
        }

        .hover_title {
          color: rgba(255, 255, 255, .75);
          font-size: .75em;

          position: absolute;
          left: 0;
          top: 20px;
          width: 500%
        }
        
        .title {
          z-index: 1;
          
          &::before {
            position: absolute;
            content: '';
            display: block;
            top: 12px;
            left: -6%;
            width: 110%;
            height: 10px;
            background: rgba(255,255,255, .5);
            opacity: 0;
            transition: 0.4s ease-in;
            z-index: -1;
          }
          
          &.active{
            &::before {
              opacity: 0.8;
            }
            
            & ~ .menu_label {
              opacity: 1;
    
              .letter {
                opacity: 1;
              }
            }
          } 
        }   
    }

`

export default HotspotsContainer
