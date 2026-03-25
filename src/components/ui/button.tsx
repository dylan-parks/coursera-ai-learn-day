import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "../../lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-8 cds-action-secondary transition-colors disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-blue-700 text-white hover:bg-blue-800",
        destructive: "bg-red-700 text-white hover:bg-red-800",
        outline: "border border-grey-400 bg-white text-grey-975 hover:bg-grey-25",
        secondary: "bg-grey-100 text-grey-975 hover:bg-grey-200",
        ghost: "hover:bg-grey-25 hover:text-grey-975",
        link: "text-blue-700 underline-offset-4 hover:underline",
      },
      size: {
        default: "h-40 px-16 py-8",
        sm: "h-36 px-12",
        lg: "h-44 px-32",
        icon: "h-40 w-40",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
