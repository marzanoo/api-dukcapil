interface LabelProps {
  text: string;
  htmlFor: string;
}

export default function Label({ text, htmlFor }: LabelProps) {
  return (
    <label
      htmlFor={htmlFor}
      className="block text-sm font-medium text-gray-700"
    >
      {text}
    </label>
  );
}
