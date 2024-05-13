import { Modal } from "~/app/@modal/(.)img/[id]/modal";
import { FullPageImageView } from "~/components/full-page-image-view";

export default async function PhotoModal({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  return (
    <Modal>
      <FullPageImageView photoId={photoId} />
    </Modal>
  );
}
