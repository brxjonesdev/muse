export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[];

export type Database = {
  graphql_public: {
    Tables: {
      [_ in never]: never;
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      graphql: {
        Args: { extensions?: Json; operationName?: string; query?: string; variables?: Json };
        Returns: Json;
      };
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
  public: {
    Tables: {
      albums: {
        Row: {
          added_at: string;
          artist_id: number;
          artist_name: string;
          copyright: string | null;
          country: string | null;
          cover_l: string | null;
          cover_m: string | null;
          explicit: boolean | null;
          genre: string | null;
          id: string;
          itunes_id: number;
          label: string | null;
          mbid: string | null;
          release_date: string | null;
          slug: string;
          title: string;
          track_count: number | null;
          type: string | null;
          upc: string | null;
          updated_at: string;
        };
        ComputedFields: never;
        Insert: {
          added_at?: string;
          artist_id: number;
          artist_name: string;
          copyright?: string | null;
          country?: string | null;
          cover_l?: string | null;
          cover_m?: string | null;
          explicit?: boolean | null;
          genre?: string | null;
          id?: string;
          itunes_id: number;
          label?: string | null;
          mbid?: string | null;
          release_date?: string | null;
          slug: string;
          title: string;
          track_count?: number | null;
          type?: string | null;
          upc?: string | null;
          updated_at?: string;
        };
        Update: {
          added_at?: string;
          artist_id?: number;
          artist_name?: string;
          copyright?: string | null;
          country?: string | null;
          cover_l?: string | null;
          cover_m?: string | null;
          explicit?: boolean | null;
          genre?: string | null;
          id?: string;
          itunes_id?: number;
          label?: string | null;
          mbid?: string | null;
          release_date?: string | null;
          slug?: string;
          title?: string;
          track_count?: number | null;
          type?: string | null;
          upc?: string | null;
          updated_at?: string;
        };
        Relationships: [
          {
            foreignKeyName: "albums_artist_id_fkey";
            columns: ["artist_id"];
            isOneToOne: false;
            referencedRelation: "artists";
            referencedColumns: ["itunes_id"];
          },
        ];
      };
      artists: {
        Row: {
          added_at: string;
          genre: string | null;
          id: string;
          image_url: string | null;
          itunes_id: number;
          mbid: string | null;
          name: string;
          normalized_name: string;
          slug: string;
          updated_at: string;
        };
        ComputedFields: never;
        Insert: {
          added_at?: string;
          genre?: string | null;
          id?: string;
          image_url?: string | null;
          itunes_id: number;
          mbid?: string | null;
          name: string;
          normalized_name: string;
          slug: string;
          updated_at?: string;
        };
        Update: {
          added_at?: string;
          genre?: string | null;
          id?: string;
          image_url?: string | null;
          itunes_id?: number;
          mbid?: string | null;
          name?: string;
          normalized_name?: string;
          slug?: string;
          updated_at?: string;
        };
        Relationships: [];
      };
      profiles: {
        Row: {
          created_at: string;
          id: string;
          updated_at: string;
          username: string;
        };
        ComputedFields: never;
        Insert: {
          created_at?: string;
          id: string;
          updated_at?: string;
          username: string;
        };
        Update: {
          created_at?: string;
          id?: string;
          updated_at?: string;
          username?: string;
        };
        Relationships: [];
      };
      tracks: {
        Row: {
          added_at: string;
          album_id: number;
          album_name: string;
          album_type: string;
          artist_id: number;
          artist_name: string;
          artwork_url: string | null;
          country: string | null;
          disc_number: number;
          duration_ms: number | null;
          explicit: boolean;
          genre: string | null;
          id: string;
          isrc: string | null;
          itunes_id: number;
          itunes_url: string;
          mbid: string | null;
          preview_url: string | null;
          release_date: string | null;
          slug: string;
          title: string;
          track_number: number | null;
          updated_at: string;
        };
        ComputedFields: never;
        Insert: {
          added_at?: string;
          album_id: number;
          album_name: string;
          album_type: string;
          artist_id: number;
          artist_name: string;
          artwork_url?: string | null;
          country?: string | null;
          disc_number?: number;
          duration_ms?: number | null;
          explicit?: boolean;
          genre?: string | null;
          id?: string;
          isrc?: string | null;
          itunes_id: number;
          itunes_url: string;
          mbid?: string | null;
          preview_url?: string | null;
          release_date?: string | null;
          slug: string;
          title: string;
          track_number?: number | null;
          updated_at?: string;
        };
        Update: {
          added_at?: string;
          album_id?: number;
          album_name?: string;
          album_type?: string;
          artist_id?: number;
          artist_name?: string;
          artwork_url?: string | null;
          country?: string | null;
          disc_number?: number;
          duration_ms?: number | null;
          explicit?: boolean;
          genre?: string | null;
          id?: string;
          isrc?: string | null;
          itunes_id?: number;
          itunes_url?: string;
          mbid?: string | null;
          preview_url?: string | null;
          release_date?: string | null;
          slug?: string;
          title?: string;
          track_number?: number | null;
          updated_at?: string;
        };
        Relationships: [
          {
            foreignKeyName: "tracks_album_id_fkey";
            columns: ["album_id"];
            isOneToOne: false;
            referencedRelation: "albums";
            referencedColumns: ["itunes_id"];
          },
          {
            foreignKeyName: "tracks_artist_id_fkey";
            columns: ["artist_id"];
            isOneToOne: false;
            referencedRelation: "artists";
            referencedColumns: ["itunes_id"];
          },
        ];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      show_limit: { Args: Record<PropertyKey, never>; Returns: number };
      show_trgm: { Args: { "": string }; Returns: string[] };
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
};

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">;

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">];

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals;
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof DatabaseWithoutInternals }
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R;
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] & DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R;
      }
      ? R
      : never
    : never;

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals;
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof DatabaseWithoutInternals }
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I;
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I;
      }
      ? I
      : never
    : never;

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals;
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof DatabaseWithoutInternals }
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U;
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U;
      }
      ? U
      : never
    : never;

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends (DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals;
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never) = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof DatabaseWithoutInternals }
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never;

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends (PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals;
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never) = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof DatabaseWithoutInternals }
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never;

export const Constants = {
  graphql_public: {
    Enums: {},
  },
  public: {
    Enums: {},
  },
} as const;
