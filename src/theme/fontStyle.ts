//React Native's fontWeight has specific allowed values ("100", "200", "300", etc.), so we define a FontStyle interface.

export interface FontStyle {
  fontFamily: string;
  fontWeight:
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900'
    | 'bold'
    | 'normal';
}
