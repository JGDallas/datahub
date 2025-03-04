import React from 'react';
import { BADGE } from '@geometricpanda/storybook-addon-badges';
import type { Meta, StoryObj } from '@storybook/react';
import { BarChart } from './BarChart';
import { getMockedProps } from './utils';

const meta = {
    title: 'Charts / BarChart',
    component: BarChart,

    // Display Properties
    parameters: {
        layout: 'centered',
        badges: [BADGE.EXPERIMENTAL],
        docs: {
            subtitle: 'A component that is used to show BarChart',
        },
    },

    // Component-level argTypes
    argTypes: {
        data: {
            description: 'Array of datum to show',
        },
        xAccessor: {
            description: 'A function to convert datum to value of X',
        },
        yAccessor: {
            description: 'A function to convert datum to value of Y',
        },
        renderTooltipContent: {
            description: 'A function to replace default rendering of toolbar',
        },
        margin: {
            description: 'Add margins to chart',
        },
        leftAxisTickFormat: {
            description: 'A function to format labels of left axis',
        },
        leftAxisTickLabelProps: {
            description: 'Props for label of left axis',
        },
        bottomAxisTickFormat: {
            description: 'A function to format labels of bottom axis',
        },
        bottomAxisTickLabelProps: {
            description: 'Props for label of bottom axis',
        },
        barColor: {
            description: 'Color of bar',
            control: {
                type: 'color',
            },
        },
        barSelectedColor: {
            description: 'Color of selected bar',
            control: {
                type: 'color',
            },
        },
        gridColor: {
            description: "Color of grid's lines",
            control: {
                type: 'color',
            },
        },
        renderGradients: {
            description: 'A function to render different gradients that can be used as colors',
        },
    },

    // Define defaults
    args: {
        ...getMockedProps(),
        renderTooltipContent: (datum) => <>DATUM: {JSON.stringify(datum)}</>,
    },
} satisfies Meta<typeof BarChart>;

export default meta;

type Story = StoryObj<typeof meta>;

export const sandbox: Story = {
    tags: ['dev'],
    render: (props) => (
        <div style={{ width: '900px', height: '350px' }}>
            <BarChart {...props} />
        </div>
    ),
};
