import { cn } from '@/utils/cn';

export interface ButtonOwnProps {
  children: React.ReactNode;

  // div, span은 react-router-dom의 <Link>와 함께 사용할 때 <a> 태그 중복 방지를 위해 사용.
  // Next.js의 <Link>는 자식이 <a> 태그일 경우 a 요소 중복이 자동 제거됨. <a> 태그 사용 권장. 불 필요한 div, span 사용 방지.
  as?: 'button' | 'a' | 'div' | 'span';

  // 스타일 정의
  variant:
    | 'primaryFulled'
    | 'secondaryFulled'
    | 'dangerFulled'
    | 'primaryOutlined'
    | 'secondaryOutlined'
    | 'dangerOutlined';
  size: 'sm' | 'md' | 'lg';
  className?: string;
  isDisabled?: boolean;
  isFullWidth?: boolean;
}

type HTMLButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;
type HTMLAnchorProps = React.AnchorHTMLAttributes<HTMLAnchorElement>;
type HTMLDivProps = React.HTMLAttributes<HTMLDivElement>;
type HTMLSpanProps = React.HTMLAttributes<HTMLSpanElement>;

export type ButtonProps =
  | (ButtonOwnProps & { as?: 'button' } & HTMLButtonProps)
  | (ButtonOwnProps & { as: 'a' } & HTMLAnchorProps)
  | (ButtonOwnProps & { as: 'div' } & HTMLDivProps)
  | (ButtonOwnProps & { as: 'span' } & HTMLSpanProps);

const DEFAULT_CLASSES = 'rounded-lg flex items-center justify-center gap-x-sm';
const SIZE_CLASSES = {
  sm: 'font-style-small px-sm h-[32px]',
  md: 'font-style-medium px-md h-[40px]',
  lg: 'font-style-large px-lg h-[48px]',
};
const VARIANT_CLASSES = {
  primaryFulled: 'bg-bg-primary text-text-inverse',
  secondaryFulled: 'bg-bg-secondary text-text-inverse',
  dangerFulled: 'bg-bg-danger text-text-inverse',
  primaryOutlined: 'bg-white border border-border-primary text-text-primary',
  secondaryOutlined: 'bg-white border border-border-secondary text-text-secondary',
  dangerOutlined: 'bg-white border border-border-danger text-text-danger',
};

const Button = ({
  as = 'button',
  children,
  variant,
  size,
  className,
  isDisabled = false,
  isFullWidth = true,
  ...restprops
}: ButtonProps) => {
  const commonClasses = cn(
    DEFAULT_CLASSES,
    SIZE_CLASSES[size],
    VARIANT_CLASSES[variant],
    className,
    isFullWidth && 'w-full',
    isDisabled && 'bg-bg-disabled text-text-disabled'
  );

  if (as === 'button') {
    const { ...buttonProps } = restprops as HTMLButtonProps;

    return (
      <button className={commonClasses} disabled={isDisabled} {...buttonProps}>
        {children}
      </button>
    );
  }

  if (as === 'a') {
    const { ...anchorProps } = restprops as HTMLAnchorProps;

    return (
      <a className={commonClasses} {...anchorProps}>
        {children}
      </a>
    );
  }

  if (as === 'div') {
    const { ...divProps } = restprops as HTMLDivProps;

    return (
      <div className={commonClasses} {...divProps}>
        {children}
      </div>
    );
  }

  if (as === 'span') {
    const { ...spanProps } = restprops as HTMLSpanProps;

    return (
      <span className={commonClasses} {...spanProps}>
        {children}
      </span>
    );
  }
};

Button.displayName = 'Button';

export default Button;
