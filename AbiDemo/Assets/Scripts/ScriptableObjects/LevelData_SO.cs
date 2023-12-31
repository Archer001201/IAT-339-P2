using System.Collections.Generic;
using Dialogue;
using UnityEngine;
using UnityEngine.Serialization;

namespace ScriptableObjects
{
    [CreateAssetMenu(fileName = "EventData_SO", menuName = "Scriptable Object/Event Data")]
    // ReSharper disable once InconsistentNaming
    public class LevelData_SO : ScriptableObject
    {
        public string currentLevelID;
        public List<LevelInfo> levels;
    }
}
