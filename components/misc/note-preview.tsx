type Props = {
  title: string
  content: string
}

function TruncateText({ content, maxLength }) {
  const truncatedContent =
    content.length > maxLength
      ? content.substr(0, maxLength) + '...'
      : content;

  return <>{truncatedContent}</>;
}

const NotePreview = ({ title, content }: Props) => {
  return (
    <span className="note-preview block col-span-2 max-w-[400px] rounded shadow-sm p-5 bg-white cursor-pointer text-lg hover:bg-slate-50">
      <span className="block font-bold leading-snug tracking-tight mb-1">
        <TruncateText content={title} maxLength={100} />
      </span>
      <span className="block font-normal text-gray-600 whitespace-pre-line">
        <TruncateText content={content} maxLength={160} />
      </span>
    </span>
  );
}

export default NotePreview

