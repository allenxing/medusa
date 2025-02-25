/**
 * @schema AdminPostExchangesReturnRequestItemsReqSchema
 * type: object
 * description: SUMMARY
 * x-schemaName: AdminPostExchangesReturnRequestItemsReqSchema
 * properties:
 *   items:
 *     type: array
 *     description: The exchange's items.
 *     items:
 *       type: object
 *       description: The item's items.
 *       required:
 *         - id
 *         - quantity
 *       properties:
 *         id:
 *           type: string
 *           title: id
 *           description: The item's ID.
 *         quantity:
 *           type: number
 *           title: quantity
 *           description: The item's quantity.
 *         description:
 *           type: string
 *           title: description
 *           description: The item's description.
 *         internal_note:
 *           type: string
 *           title: internal_note
 *           description: The item's internal note.
 *         reason_id:
 *           type: string
 *           title: reason_id
 *           description: The item's reason id.
 *         metadata:
 *           type: object
 *           description: The item's metadata.
 * 
*/

