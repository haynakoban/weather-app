import GaugeComponent from 'react-gauge-component';

const GauseUVIndex = () => {
  return (
    <GaugeComponent
      type='grafana'
      pointer={{
        type: 'arrow',
        color: 'transparent',
        animate: false,
      }}
      arc={{
        width: 0.25,
        padding: 0,
        cornerRadius: 1,
        subArcs: [
          {
            limit: 1,
            color: '#5BE12C',
            showTick: false,
          },
          {
            limit: 2,
            color: '#5BE12C',
            showTick: false,
          },
          {
            limit: 3,
            color: '#F5CD19',
            showTick: false,
          },
          {
            limit: 4,
            color: '#F5CD19',
            showTick: true,
          },
          {
            limit: 5,
            color: '#F5CD19',
            showTick: false,
          },
          {
            limit: 6,
            color: '#F58B19',
            showTick: false,
          },
          {
            limit: 7,
            color: '#F58B19',
            showTick: false,
          },
          {
            limit: 8,
            color: '#EA4228',
            showTick: true,
          },
          {
            limit: 9,
            color: '#EA4228',
            showTick: false,
          },
          {
            limit: 10,
            color: '#EA4228',
            showTick: false,
          },
          {
            limit: 11,
            color: '#7B439B',
            showTick: false,
          },
          {
            limit: 12,
            color: '#7B439B',
            showTick: true,
          },
          {
            limit: 13,
            color: '#7B439B',
            showTick: false,
          },
          {
            limit: 14,
            color: '#7B439B',
            showTick: false,
          },
          {
            limit: 15,
            color: '#7B439B',
            showTick: false,
          },
        ],
      }}
      labels={{
        valueLabel: {
          style: {
            fontSize: '48px',
            fill: '#202128',
            textShadow: 'none',
          },
          formatTextValue: (value) => value,
        },
        tickLabels: {
          type: 'outer',

          valueConfig: {
            formatTextValue: (value) => value,
            fontSize: 8,
          },
        },
      }}
      value={2}
      minValue={1}
      maxValue={15}
    />
  );
};
export default GauseUVIndex;
