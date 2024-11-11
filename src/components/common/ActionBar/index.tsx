import { Button, ButtonVariant } from "@/components/atom/Button";

interface Props {
  actions: {
    name: string;
    label: string;
    buttonVariant?: ButtonVariant;
  }[];
}

export function ActionBar({ actions }: Props) {
  return (
    <div className="flex items-center gap-2 pt-10">
      {actions.map((action) => (
        <Button
          key={action.name}
          outline
          variant={action.buttonVariant ?? "secondary"}
        >
          {action.label}
        </Button>
      ))}
    </div>
  );
}
