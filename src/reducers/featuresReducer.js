const initialState = {
        additionalPrice: 0,
        car: {
          price: 26395,
          name: '2019 Ford Mustang',
          image:
            'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
          features: []
        },
        additionalFeatures: [
          { id: 1, name: 'V-6 engine', price: 1500 },
          { id: 2, name: 'Racing detail package', price: 1500 },
          { id: 3, name: 'Premium sound system', price: 500 },
          { id: 4, name: 'Rear spoiler', price: 250 }
        ]
      }

export const featuresReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_FEATURE':
            console.log('adding feature from reducer')
            //Grab selected feature
            const selectedFeature = state.additionalFeatures.filter(feature => feature.id === action.payload)
            return {
                ...state,
                features: [...state.features, selectedFeature],
                //Add price of feature to additional price
                additionalPrice: state.additionalPrice + selectedFeature.price
            }
        case 'REMOVE_FEATURE':
            console.log('removing feature from reducer')

            const featureToBeRemoved = state.features.filter(feature => feature.id === action.payload)

            return {
                ...state,

                //Filter out selected feature from list
                features: state.features.filter(feature => feature.id !== action.payload),

                //Remove price of feature from additional features total
                additionalPrice: state.additionalPrice - featureToBeRemoved.price
            }
        default:
            return state
    }
}