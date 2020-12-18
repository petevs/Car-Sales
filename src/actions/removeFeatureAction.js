export const removeFeature = (featureId) => {
    return { type: 'REMOVE_FEATURE', payload: featureId}
}