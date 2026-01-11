/**
 * Auto-generated entity types
 * Contains all CMS collection interfaces in a single file 
 */

/**
 * Collection ID: cyberawarenesstopics
 * Interface for CyberAwarenessTopics
 */
export interface CyberAwarenessTopics {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  topicName?: string;
  /** @wixFieldType text */
  shortDescription?: string;
  /** @wixFieldType text */
  detailedContent?: string;
  /** @wixFieldType image */
  topicImage?: string;
  /** @wixFieldType text */
  threatCategory?: string;
  /** @wixFieldType datetime */
  lastUpdated?: Date | string;
}
