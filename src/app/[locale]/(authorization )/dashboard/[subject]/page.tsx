export default function Page({ params }: { params: { id: string } }) {
  return (
    <div>
      Subjec
      <p>{params.id}</p>
    </div>
  );
}
