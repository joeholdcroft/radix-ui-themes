import { asChildProp } from '../helpers';
import type { PropDef } from '../helpers';

const sizes = ['1', '2', '3', '4', '5', '6', '7', '8', '9'] as const;

const kbdPropDefs = {
  asChild: asChildProp,
  size: {
    type: 'enum',
    className: 'rt-r-size',
    values: sizes,
    default: undefined,
    responsive: true,
  },
} satisfies {
  asChild: typeof asChildProp;
  size: PropDef<(typeof sizes)[number]>;
};

export { kbdPropDefs };
