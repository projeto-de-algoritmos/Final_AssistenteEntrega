import React, { useEffect, useState } from 'react';
import findBestRoute from '../../../../../utils/findBestRoute';
import { useSelector } from 'react-redux';
import {
    MainContainer,
    StepContainer,
    StepWrapper,
    StepStyle,
    StepCount,
    StepsLabelContainer,
    StepLabel
} from './styles'

export default function RouteSteps ({items}) {
  const graphs = useSelector(state => state.grafos);
  const [routes, setRoutes] = useState([])
  
  useEffect(() => {
    setRoutes(findBestRoute(graphs, items))
  }, [])

    return (
      <MainContainer>
        <StepContainer>
          {routes.map(({id, sigla}) => (
            <StepWrapper>
              <StepStyle>
                <StepCount>{id}</StepCount>
              </StepStyle>
              <StepsLabelContainer>
                <StepLabel>{sigla}</StepLabel>
              </StepsLabelContainer>
          </StepWrapper>
          ))}
        </StepContainer>
      </MainContainer>
      
    )
  }