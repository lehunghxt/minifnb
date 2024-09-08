import Svg, { G, Ellipse, Rect } from 'react-native-svg';
import {IconProps} from '.';
const PlusIcon = (props: IconProps) => {
  const { width = 64, height = 64 } = props;
  return (
    <>
      <Svg
        id="Layer_1"
        // @ts-ignore
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 512 512"
        xmlSpace="preserve"
        width={width}
        height={height}
        fill="#000000"
        {...props}
      >
        <G id="SVGRepo_bgCarrier" strokeWidth={0} />
        <G
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <G id="SVGRepo_iconCarrier">
          <Ellipse
            // @ts-ignore
            style={{
              fill: '#f5df51',
            }}
            cx={256}
            cy={256}
            rx={256}
            ry={255.832}
          />
          <G>
            <Rect
              x={113.2}
              y={228}
              // @ts-ignore
              style={{
                fill: '#FFFFFF',
              }}
              width={285.672}
              height={56}
            />
            <Rect
              x={228}
              y={113.2}
              // @ts-ignore
              style={{
                fill: '#FFFFFF',
              }}
              width={56}
              height={285.672}
            />
          </G>
        </G>
      </Svg>
    </>
  );
};
export default PlusIcon;
