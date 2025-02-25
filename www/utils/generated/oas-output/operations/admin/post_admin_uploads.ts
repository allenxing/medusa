/**
 * @oas [post] /admin/uploads
 * operationId: PostUploads
 * summary: Create Upload
 * description: Create a upload.
 * x-authenticated: true
 * parameters: []
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 *   - jwt_token: []
 * requestBody:
 *   content:
 *     application/json:
 *       schema:
 *         oneOf:
 *           - type: object
 *             description: SUMMARY
 *             required:
 *               - files
 *             properties:
 *               files:
 *                 type: array
 *                 description: The upload's files.
 *                 items:
 *                   oneOf:
 *                     - type: object
 *                       description: The file's files.
 *                       required:
 *                         - name
 *                         - content
 *                       properties:
 *                         name:
 *                           type: string
 *                           title: name
 *                           description: The file's name.
 *                         content:
 *                           type: string
 *                           title: content
 *                           description: The file's content.
 *                     - $ref: "#/components/schemas/File"
 *           - $ref: "#/components/schemas/FileList"
 *         description: SUMMARY
 * x-codeSamples:
 *   - lang: Shell
 *     label: cURL
 *     source: |-
 *       curl -X POST '{backend_url}/admin/uploads' \
 *       -H 'x-medusa-access-token: {api_token}'
 * tags:
 *   - Uploads
 * responses:
 *   "200":
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           $ref: "#/components/schemas/AdminFileListResponse"
 *   "400":
 *     $ref: "#/components/responses/400_error"
 *   "401":
 *     $ref: "#/components/responses/unauthorized"
 *   "404":
 *     $ref: "#/components/responses/not_found_error"
 *   "409":
 *     $ref: "#/components/responses/invalid_state_error"
 *   "422":
 *     $ref: "#/components/responses/invalid_request_error"
 *   "500":
 *     $ref: "#/components/responses/500_error"
 * x-workflow: uploadFilesWorkflow
 * 
*/

