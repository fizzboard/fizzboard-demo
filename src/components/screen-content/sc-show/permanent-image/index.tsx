// import { useState } from "react";
// import { useEffect } from "react";
// import { useRef } from "react";
// import { FzbPostId, FzbScreenId } from "~/zod-types/branded-strings";
// import { FzbScreenConfigShowPermanentImageData } from "~/zod-types/screen-config/fzb-show-permanent-image";
// import { ScreenContentImageLinkComponent } from "../../post-types/image-link/screen-content-image-link-component";
// import { FzbImageLinkPostData } from "~/zod-types/posts/fzb-image-link-post";


// export interface Dimensions {
//   width: number;
//   height: number;
// }

// interface ScreenContentComponentProps {
//   screenId: FzbScreenId;
//   screenConfig: FzbScreenConfigShowPermanentImageData;
// }

// export const ScreenContentPermanentImageLink = ({ 
//   screenId,
//   screenConfig,
// }: ScreenContentComponentProps) => {

//   const paperRef = useRef<HTMLDivElement>(null);
//   const [dimensions, setDimensions] = useState<Dimensions | null>(null);
  
//   useEffect(() => {
//     const element = paperRef.current;
//     if (!element) return;

//     const observer = new ResizeObserver((entries) => {
//       const entry = entries[0];
//       if (entry) {
//         const { width, height } = entry.contentRect;
//         setDimensions({ width, height });
//       }
//     });

//     observer.observe(element);
//     return () => observer.disconnect();
//   }, []);

//   const postedData: FzbImageLinkPostData = {
//     id: "image-link-post" as FzbPostId,
//     name: "Permanent Image",
//     postType: "image-link",
//     imageUrl: screenConfig.imageUrl,
//   }

//   return (
//     // <Paper
//     //   ref={paperRef}
//     //   key={screenId}
//     //   elevation={3}
//     //   sx={{
//     //     // display: 'flex',
//     //     // alignItems: 'center',
//     //     // justifyContent: 'center',
//     //     // color: 'text.secondary',
//     //     // border: '1px solid #000',
//     //     // flexDirection: 'column',
//     //     // gap: 1,
//     //   }}
//     // >
//       <ScreenContentImageLinkComponent {...postedData as FzbImageLinkPostData} />
//       // {/* <ScreenDataRenderer
//       //   postedData={screenPostData}
//       //   dimensions={dimensions}
//       //   sendPostToScreenUrl={sendPostToScreenUrl}
//       //   gridCoordinate={gridCoordinate}
//       // /> */}
//       // {/* <img src={screenConfig.imageUrl} alt="Permanent Image" /> */}
//     // </Paper>
//   );
// };
