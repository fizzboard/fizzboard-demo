
export const FlexRowDiv = ({children, style}: {children: React.ReactNode, style?: React.CSSProperties}) => {
  return <div style={{ display: 'flex', flexDirection: 'row', ...style }}>{children}</div>
}

export const FlexColumnDiv = ({children, style}: {children: React.ReactNode, style?: React.CSSProperties}) => {
  return <div style={{ display: 'flex', flexDirection: 'column', ...style }}>{children}</div>
}

export const VerticalSpacerDiv = ({height, style}: {height: number, style?: React.CSSProperties}) => {
  return <div style={{ height, ...style }}></div>
}

export const HorizontalSpacerDiv = ({width, style}: {width: number, style?: React.CSSProperties}) => {
  return <div style={{ width, ...style }}></div>
}


export const HorizontalFlexContainerDiv = ({children, style}: {children: React.ReactNode, style?: React.CSSProperties}) => {
  return <div style={{ display: 'flex', flexDirection: 'row', ...style }}>{children}</div>
}

export const HorizontalCenteredFlexContainerDiv = ({children, style}: {children: React.ReactNode, style?: React.CSSProperties}) => {
  return (
    <HorizontalFlexContainerDiv style={{ 
      ...style,
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      {children}
    </HorizontalFlexContainerDiv>
  )
}

export const VerticalFlexContainerDiv = ({children, style}: {children: React.ReactNode, style?: React.CSSProperties}) => {
  return <div style={{ display: 'flex', flexDirection: 'column', ...style }}>{children}</div>
}

export const VerticalCenterAlignedFlexContainerDiv = ({children, style}: {children: React.ReactNode, style?: React.CSSProperties}) => {
  return <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', ...style }}>{children}</div>
}
