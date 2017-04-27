/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /character-tag              ->  index
 * POST    /character-tag              ->  create
 * GET     /character-tag/:id          ->  show
 * PUT     /character-tag/:id          ->  update
 * DELETE  /character-tag/:id          ->  destroy
 */

'use strict';

var connect = require('../../components/connect');

// character-tag.index -> Get list of character-tags.
exports.index = function(req, res) {

  var args = {
    query: "SELECT character_tag.id, character_tag.value, tag.name FROM character_tag, tag" +
      " WHERE character_tag.tag_id = tag.id AND character_tag.character_id=" +
      req.headers.id + " ORDER BY character_tag.id",
    res: res
  };

  connect.query(args);

};

// character-tag.show -> Get all tags related to character ID.
exports.show = function(req, res) {

  var args = {
    query: "SELECT tag_id, value FROM character_tag WHERE character_id=" +
      req.params.character_id,
    res: res
  };

  connect.query(args);

};

// character-tag.create -> Create new character-tag.
exports.create = function(req, res) {

  // Function to check if tag_id exists.
  function getTagID(name, callback) {
    var cb = function(result) {
      if(result) {
        if(result.length > 0){
          console.log(result);
          callback(result[0].id);
        }
        else {
          callback(null);
        }
      }
      // Error.
      else {
        res.send(500);
      }
    };

    // Store query and callback function into args.
    var args = {
      query:  "SELECT id FROM tag WHERE name='" + name + "';",
      callback: cb
    };

    // Send args to server.
    connect.query(args);
  }

  // Callback function for checking whether tag_id exists.
  // If yes, create character_tag. If no, create tag name.
  var callback = function(id) {
    if(id) {
      createTagRelationship(req.params.character_id, id, req.params.value);
    }
    else {
      createTag(req.params.name);
    }
  };

  // Function to create character-tag using values passed from req.params.
  function createTagRelationship(charID, tagID, value) {
    var args = {
      query: "INSERT INTO character_tag (character_id, tag_id, value) VALUES ('" +
        charID + "', " + tagID + ", '" + value + "')",
      res: res
    };
    // Send query and response to server with args.
    connect.query(args);
  }

  //
  function createTag(name) {
    var args = {
      query: "INSERT INTO tag (name, suggested) VALUES ('" + name + "', FALSE)",
      callback: function(result) {
        if(result) {
          var id = getTagID(name, callback);
          if(id) {
            createTagRelationship(req.params.character_id, id, req.params.value);
          };
        }
        else {
          res.send(500);
        }
      }
    };
    connect.query(args);
  }

  // Run function to to retrieve/create tag_id and callback function.
  getTagID(req.params.name, callback);

};

// character-tag.update -> Update character-tag.
exports.update = function(req, res) {

// TODO (Reference tag name and not ID?)

  var callback = function(result) {
    if (result) {
      if (result.length > 0) {

      }
      else {

      }
      res.send(200);
    }
    else {
      res.send(500);
    }
  };

  // var args = {
  //   query: "UPDATE character_tag SET tag_id=" + req.params.tag_id + ", value=" +
  //     req.params.value + " WHERE id=" + req.params.id,
  //   res: res
  // };
  //
  // connect.query(args);

};

// character-tag.destroy -> Delete character-tag.
exports.destroy = function(req, res) {

  var args = {
    query: "DELETE FROM character_tag WHERE id=" + req.params.id,
    res: res
  };

  connect.query(args);

};
